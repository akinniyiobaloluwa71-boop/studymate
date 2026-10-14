window.StudyMate = window.StudyMate || {};

window.StudyMate.auth = (function () {
  var supabaseClient = null;

  // Converts a Supabase or network error into a user-facing message string.
  function getErrorMessage(error) {
    var message =
      typeof error === "string" ? error : error && error.message
        ? error.message
        : "An unexpected error occurred.";

    if (message === "User already registered") {
      return "That email is already registered. Try signing in instead.";
    }

    if (message === "Password should be at least 6 characters") {
      return "Password must be at least 6 characters.";
    }

    if (/network|failed to fetch|fetch failed|load failed/i.test(message)) {
      return "Could not reach the server. Check your internet connection.";
    }

    if (message === "Invalid login credentials") {
      return "Wrong email or password.";
    }

    return message;
  }

  // Returns the standard error object used when no Supabase client is initialized.
  function getClientError() {
    return { error: "Supabase client is not initialized." };
  }

  // Initializes the Supabase client once and returns whether it is available.
  function init() {
    if (supabaseClient) {
      return true;
    }

    var credentials = window.STUDYMATE_SUPABASE;
    if (
      !window.supabase ||
      typeof window.supabase.createClient !== "function" ||
      !credentials ||
      typeof credentials.url !== "string" ||
      typeof credentials.publishableKey !== "string"
    ) {
      return false;
    }

    try {
      supabaseClient = window.supabase.createClient(
        credentials.url,
        credentials.publishableKey,
      );
      return true;
    } catch (error) {
      return false;
    }
  }

  // Validates credentials, registers the user, and returns their user object or an error.
  async function signUp(email, password) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || ""))) {
      return { error: "Please enter a valid email address." };
    }

    if (typeof password !== "string" || password.length < 6) {
      return { error: "Password must be at least 6 characters." };
    }

    if (!supabaseClient) {
      return getClientError();
    }

    try {
      var result = await supabaseClient.auth.signUp({ email: email, password: password });
      if (result.error) {
        return { error: getErrorMessage(result.error) };
      }
      return { user: result.data.user };
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  }

  // Validates credentials, signs in the user, and returns their user object or an error.
  async function signIn(email, password) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || ""))) {
      return { error: "Please enter a valid email address." };
    }

    if (typeof password !== "string" || password.length < 6) {
      return { error: "Password must be at least 6 characters." };
    }

    if (!supabaseClient) {
      return getClientError();
    }

    try {
      var result = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (result.error) {
        return { error: getErrorMessage(result.error) };
      }
      return { user: result.data.user };
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  }

  // Signs out the current user and returns an empty object or an error.
  async function signOut() {
    if (!supabaseClient) {
      return getClientError();
    }

    try {
      var result = await supabaseClient.auth.signOut();
      if (result.error) {
        return { error: getErrorMessage(result.error) };
      }
      return {};
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  }

  // Fetches the current user and returns the user object or null.
  async function getUser() {
    if (!supabaseClient) {
      return null;
    }

    try {
      var result = await supabaseClient.auth.getUser();
      if (result.error) {
        return null;
      }
      return result.data.user || null;
    } catch (error) {
      return null;
    }
  }

  // Checks whether a current user exists and returns the result as a boolean.
  async function isSignedIn() {
    return Boolean(await getUser());
  }

  // Subscribes to authentication changes and returns the unsubscribe-capable subscription or an error.
  function onChange(callback) {
    if (!supabaseClient) {
      return getClientError();
    }

    if (typeof callback !== "function") {
      return { error: "Callback must be a function." };
    }

    try {
      // Forwards each auth event and session to the callback and returns nothing.
      var result = supabaseClient.auth.onAuthStateChange(function (event, session) {
        callback(event, session);
      });
      return result.data.subscription;
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  }

  return {
    init: init,
    signUp: signUp,
    signIn: signIn,
    signOut: signOut,
    getUser: getUser,
    isSignedIn: isSignedIn,
    onChange: onChange,
  };
})();
