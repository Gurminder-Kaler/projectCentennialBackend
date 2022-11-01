const S = "successfully";
module.exports = Object.freeze({
  SUCCESS: {
    ACCOUNT: {
      DEACTIVATED: "Account deactivated " + S,
      DELETED: "Account deleted " + S,
    },
    INFO: {
      FOUND: "Info found " + S,
      UPDATED: "Info updated " + S,
    },
    USER: {
      CREATED: "User created " + S,
      UPDATED: "User updated " + S,
      DELETED: "User deleted " + S,
      FETCHED: "User record(s) fetched " + S,
      BLOCKED: "User blocked " + S,
    },
    PATIENT: {
      ADDED: "Patient added " + S,
      ALL: "All Patients",
      SINGLE: "Patient\'s data loaded"
    },
    TEST: {
      ALL: "All Tests Loaded",
      ADDED: "Test added " + S
    },
    DEPARTMENT: {
      CREATED: "Department created " + S,
      UPDATED: "Department updated " + S,
      DELETED: "Department deleted " + S,
      FETCHED: "Department record(s) fetched " + S,
    },
    PROFILE: {
      CREATED: "Profile created " + S,
      UPDATED: "Profile updated " + S,
      DELETED: "Profile deleted " + S,
      FETCHED: "Profile record(s) fetched " + S,
    },
    AUTH: {
      LOGGEDIN: "Welcome!",
      PASSWORD_CHANGED: "Password changed " + S + ", you may login now!",
    },
    FORGOT_PASSWORD: {
      EMAIL_SENT: "OTP sent over the email " + S
    },
  },
  FAILURE: {
    ACCOUNT_NOT_VERIFIED: "Account not Verified",
    COMPANY_CATEGORY_ALREADY_TAKEN: "Company category already taken",
    OLD_PASSWORD_MISMATCH: "Old password is incorrect",
    OTP_MISMATCH: "OTP does not match, please check and try another one!",
    ACCOUNT_ALREADY_DELETED: "Already Deleted",
    USER_NOT_FOUND: "User not Found",
    BLOCK_USER_NOT_FOUND: "User to be blocked not Found",
    PUBLIC_REQUESTS_DISABLED: "Public Requests are disabled",
    PROFILE_NOT_FOUND: "Profile for this user not Found",
    POST_NOT_FOUND: "No Posts Found",
    COMMENT_NOT_FOUND: "No Comments Found",
    PROFESSION_NOT_FOUND: "Profession not found",
    USERS_NOT_FOUND: "Users not Found",
    EMAIL_ALREADY_TAKEN: "Email already taken",
    USERNAME_ALREADY_TAKEN: "Username already taken",
    MOBILE_ALREADY_TAKEN: "Mobile No. already taken",
    MOBILE_NOT_FOUND: "Mobile No. not registered with us",
    AUTH_FAILED: "Wrong Credentials, Auth failed!",
    NO_LIKES_OR_DISLIKES_FOUND: "No likes or dislikes found on the post",
    SWW: "Something went wrong!!",
    NOT_AUTHORIZED: "You are not authorized to access this route!!",
    NO_ROLE_ASSIGNED: "No Role Assigned to this user!!",
    UNAUTHORIZED: "You are not authorized to do this operation!!",
  },
});
