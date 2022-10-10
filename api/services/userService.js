const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const messages = require("@constants/messages");
const User = require("@models/userModel");
const signUpValidator = require("@validations/authRequest/signUpValidator");

const signUpServiceFunc = async (req, res) => {
  try {
    // console.log("console//////", req.body);
    // Check Validation
    const { errors, isValid } = signUpValidator(req.body);
    if (!isValid) {
      // Return any errors with 400 status
      return res.json({
        status: 400,
        success: false,
        message: errors,
      });
    }
    // console.log("line 31");
    await User.find({
      email: req.body.email,
    }).then((u) => {
      // console.log("3777");
      if (u.length > 0) {
        return res.json({
          status: 409,
          success: false,
          message: messages.FAILURE.EMAIL_ALREADY_TAKEN,
        });
      } else {
        User.find({
          userName: req.body.userName,
        }).then((us) => {
          // console.log("3777");
          if (us.length > 0) {
            return res.json({
              status: 409,
              success: false,
              message: messages.FAILURE.USERNAME_ALREADY_TAKEN,
            });
          } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              if (err) {
                return res.json({
                  status: 500,
                  success: false,
                  message: err,
                });
              } else {
                const token = jwt.sign(
                  {
                    email: us.email,
                    userId: us._id,
                  },
                  process.env.JWT_KEY,
                  {
                    expiresIn: "11h",
                  }
                );
                let userVar = new User({
                  _id: new mongoose.Types.ObjectId(),
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  userName: req.body.userName,
                  role: req.body.role,
                  email: req.body.email,
                  password: hash,
                });
                userVar.save().then((result) => {
                  // console.log("result111", result);
                  if (result) {
                    return res.json({
                      status: 200,
                      success: true,
                      message: messages.SUCCESS.USER.CREATED,
                      token: token,
                      data: {
                        id: result._id,
                        firstName: result.firstName,
                        role: result.role,
                        lastName: result.lastName,
                        email: result.email,
                        userName: result.userName,
                      },
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
    // console.log("77");
  } catch (err) {
    return res.json({
      status: 500,
      success: false,
      message: "err",
    });
  }
};

const signInServiceFunc = async (req, res) => {
  // console.log("email | body", req.body);
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.json({
          status: 401,
          success: false,
          message: messages.FAILURE.AUTH_FAILED,
        });
      }
      console.log("user password", user.password);
      console.log("body password", req.body.password);
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        console.log("result", result);
        if (err) {
          return res.json({
            status: 401,
            success: false,
            message: messages.FAILURE.AUTH_FAILED,
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "11h",
            }
          );
          return res.json({
            status: 200,
            success: true,
            message: messages.SUCCESS.AUTH.LOGGEDIN,
            token: token,
            data: {
              id: user._id,
              firstName: user.firstName,
              role: user.role,
              lastName: user.lastName,
              email: user.email,
              userName: user.userName,
            },
          });
        } else {
          return res.json({
            status: 401,
            success: false,
            message: messages.FAILURE.AUTH_FAILED,
          });
        }
      });
    })
    .catch((err) => {
      return res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

const getAllUsersServiceFunc = async (req, res) => {
  User.find()
    .select("-deletedAt")
    .exec()
    .then((docs) => {
      return res.json({
        status: 200,
        count: docs.length,
        users: docs.map((doc) => {
          return {
            _id: doc && doc._id,
            firstName: doc && doc.firstName,
            lastName: doc && doc.lastName,
            userName: doc && doc.userName,
            role: doc && doc.role,
            email: doc && doc.email,
            createdAt: doc && doc.createdAt,
            updatedAt: doc && doc.updatedAt,
          };
        }),
      });
    })
    .catch((err) => {
      return res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

const getUserViaIdServiceFunc = async (req, res) => {
  // const { errors, isValid } = myAccountValidator(req.body)
  // if (!isValid) {
  //   res.json({
  //     status: 400,
  //     success: false,
  //     message: errors
  //   })
  // }
  // console.log(req.body);
  const filter = {
    _id: req.body.userId,
  };
  User.findOne(filter)
    .select("-deletedAt")
    .exec()
    .then((user) => {
      res.json({
        success: true,
        message: messages.SUCCESS.USER.FETCHED,
        data: {
          _id: user && user._id,
          firstName: user && user.firstName,
          lastName: user && user.lastName,
          userName: user && user.userName,
          role: user && user.role,
          email: user && user.email,
          createdAt: user && user.createdAt,
          updatedAt: user && user.updatedAt,
        },
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: "err",
      });
    });
};

const updateProfileServiceFunc = async (req, res) => {
  console.log("email | body", req.body);
  User.findOne({
    _id: req.body.id,
  })
    .then((user) => {
      if (!user) {
        res.json({
          status: 401,
          success: false,
          message: messages.FAILURE.USER_NOT_FOUND,
        });
      }
      let fields = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      };
      User.findOneAndUpdate(
        {
          _id: req.body.id,
        },
        { $set: fields },
        { new: true }
      )
        .then((result) => {
          // console.log("result", result);
          res.json({
            success: true,
            status: 200,
            message: messages.SUCCESS.PROFILE.UPDATED,
            data: {
              id: result._id,
              firstName: result.firstName,
              lastName: result.lastName,
              email: result.email,
              createdAt: result.createdAt,
              updatedAt: result.updatedAt,
            },
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            success: false,
            message: err,
          });
        });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

function generateOTP() {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

function sendEmail(mailObject) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // true for 465, false for other ports
    auth: {
      user: "chaos1.champ@gmail.com", // generated ethereal user
      pass: "mdlhcdmuksjozjll", // generated ethereal password
    },
  });

  // send mail with defined transport object
  transporter.sendMail(mailObject);
}

const sendForgotPasswordOTPEmailServiceFunc = async (req, res) => {
  console.log("email", req.body);
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.json({
          status: 401,
          success: false,
          message: messages.FAILURE.USER_NOT_FOUND,
        });
      }
      let randomOTP = generateOTP();
      let fields = {
        otp: randomOTP,
      };
      User.findOneAndUpdate(
        {
          email: req.body.email,
        },
        { $set: fields }
      )
        .then((result) => {
          // console.log("result", result);
          let mailObject = {
            from: '"Quiz Karo" <info@quizKaro.com>', // sender address
            to: result.email.toString(), // list of receivers
            subject: "OTP for forgot password @ quizKaro ✔", // Subject line
            text:
              "Hello, 6 digit otp for changing the forgotten password is : " +
              randomOTP, // plain text body
            html:
              "Hello, 6 digit otp for changing the forgotten password is : <b>" +
              randomOTP +
              "</b> </br> Thanks,</br> quizKaro Team.", // html body
          };
          sendEmail(mailObject); //send the email
          res.json({
            success: true,
            status: 200,
            message: messages.SUCCESS.FORGOT_PASSWORD.EMAIL_SENT,
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            success: false,
            message: err,
          });
        });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

const verifyOTPServiceFunc = async (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.json({
          status: 401,
          success: false,
          message: messages.FAILURE.USER_NOT_FOUND,
        });
      }
      User.findOne({
        email: req.body.email,
      })
        .then((result) => {
          // console.log("result", result);
          if (result.otp == req.body.otp) {
            let mailObject = {
              from: '"Quiz Karo" <info@quizKaro.com>', // sender address
              to: result.email.toString(), // list of receivers
              subject: "Verification successful @ quizKaro ✔", // Subject line
              text: "Verification Successful, You may now change the password!", // plain text body
              html:
                "Verification Successful, You may now change the password!" +
                "</br> Thanks,</br> quizKaro Team.", // html body
            };
            sendEmail(mailObject);
            return res.json({
              success: true,
              status: 200,
              message: messages.SUCCESS.FORGOT_PASSWORD.VERIFICATION_DONE,
            });
          } else {
            return res.json({
              success: false,
              status: 409,
              message: messages.FAILURE.OTP_MISMATCH,
            });
          }
        })
        .catch((err) => {
          res.json({
            status: 500,
            success: false,
            message: err,
          });
        });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

const updatePasswordServiceFunc = async (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.json({
          status: 401,
          success: false,
          message: messages.FAILURE.USER_NOT_FOUND,
        });
      }
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.json({
            status: 500,
            success: false,
            message: err,
          });
        } else {
          let fields = {
            password: hash,
          };
          User.findOneAndUpdate(
            {
              email: req.body.email,
            },
            { $set: fields }
          )
            .then((result) => {
              let mailObject = {
                from: '"Quiz Karo" <info@quizKaro.com>', // sender address
                to: result.email.toString(), // list of receivers
                subject: "You changed your password successfully @ quizKaro ✔", // Subject line
                text:
                  "You changed your password Successfullly, You may now login with the password : ", // plain text body
                html:
                  "You changed your password Successfullly, You may now login with the password : </br> Thanks,</br> quizKaro Team.",
              };
              sendEmail(mailObject);
              return res.json({
                success: true,
                status: 200,
                message: messages.SUCCESS.AUTH.PASSWORD_CHANGED,
              });
            })
            .catch((err) => {
              res.json({
                status: 500,
                success: false,
                message: err,
              });
            });
        }
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        success: false,
        message: err,
      });
    });
};

const userService = (module.exports = {
  signUpServiceFunc,
  getAllUsersServiceFunc,
  getUserViaIdServiceFunc,
  signInServiceFunc,
  updateProfileServiceFunc,
  sendForgotPasswordOTPEmailServiceFunc,
  verifyOTPServiceFunc,
  updatePasswordServiceFunc,
});
