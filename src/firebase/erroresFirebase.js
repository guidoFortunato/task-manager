export const erroresFirebase = (codeError) => {
  switch (codeError) {
    case "auth/weak-password":
      return "The password is very weak";

    case "auth/missing-email":
      return "Enter email address";

    case "auth/email-already-in-use":
      return "The mail has already been registered.";
    case "auth/internal-error":
      return "Something unexpected has occurred, please try again later.";

    case "auth/invalid-email":
      return "The mail is invalid";
    default:
      return "An error occurred in the server";
  }
};

/*

switch (error.code) {
        case "auth/weak-password":
          
          setError("pass", {
            message: `The password ${data.password} is very weak`,
          });

          break;

        case "auth/missing-email":
       
          setError("pass", {
            message: `Enter email address`,
          });

          break;

        case "auth/email-already-in-use":
         
          setError("email", {
            message: `The mail: ${data.email} has already been registered.`,
          });
          break;
        case "auth/internal-error":
          
          setError("email", {
            message: `Something unexpected has occurred, please try again later.`,
          });
          break;

        case "auth/invalid-email":

          setError("email", {
            message: `The mail: ${data.email} is invalid`,
          });
          break;

        default:
          console.log("An error occurred in the server");
      }
*/