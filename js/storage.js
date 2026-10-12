// localStorage keeps data in this browser's storage area; it is per-browser and per-device only.
window.StudyMate = window.StudyMate || {};

var PREFIX = "studymate:v1:";

function getStorageArea() {
  try {
    return window.localStorage;
  } catch (error) {
    return null;
  }
}

function warnStorage(message, error) {
  try {
    if (error === undefined) {
      console.warn(message);
    } else {
      console.warn(message, error);
    }
  } catch (warningError) {
    return false;
  }

  return true;
}

window.StudyMate.storage = {
  isAvailable: function () {
    var storageArea = getStorageArea();
    if (!storageArea) {
      return false;
    }

    try {
      var testKey = PREFIX + "__availability_test__";
      storageArea.setItem(testKey, "1");
      storageArea.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  },

  read: function (key, fallback) {
    var storageArea = getStorageArea();
    if (!storageArea) {
      return fallback;
    }

    try {
      var storedValue = storageArea.getItem(PREFIX + key);
      if (storedValue === null) {
        return fallback;
      }

      try {
        return JSON.parse(storedValue);
      } catch (error) {
        var removalError;
        try {
          storageArea.removeItem(PREFIX + key);
        } catch (errorDuringRemoval) {
          removalError = errorDuringRemoval;
        }
        warnStorage(
          "Removed corrupted StudyMate storage for key: " + key + ".",
          removalError
        );
        return fallback;
      }
    } catch (error) {
      warnStorage("Unable to read StudyMate storage for key: " + key + ".", error);
      return fallback;
    }
  },

  write: function (key, value) {
    var storageArea = getStorageArea();
    if (!storageArea) {
      warnStorage("StudyMate browser storage is unavailable.");
      return false;
    }

    try {
      var serializedValue = JSON.stringify(value);
      if (serializedValue === undefined) {
        throw new TypeError("Value cannot be serialized as JSON.");
      }
      storageArea.setItem(PREFIX + key, serializedValue);
      return true;
    } catch (error) {
      var isQuotaError =
        error &&
        (error.name === "QuotaExceededError" ||
          error.name === "NS_ERROR_DOM_QUOTA_REACHED" ||
          error.code === 22 ||
          error.code === 1014);
      warnStorage(
        isQuotaError
          ? "StudyMate browser storage quota exceeded."
          : "Unable to write StudyMate storage for key: " + key + ".",
        error
      );
      return false;
    }
  },

  remove: function (key) {
    var storageArea = getStorageArea();
    if (!storageArea) {
      return false;
    }

    try {
      storageArea.removeItem(PREFIX + key);
      return true;
    } catch (error) {
      warnStorage("Unable to remove StudyMate storage for key: " + key + ".", error);
      return false;
    }
  },

  clearAll: function () {
    var storageArea = getStorageArea();
    if (!storageArea) {
      return false;
    }

    try {
      var keysToRemove = [];
      for (var index = 0; index < storageArea.length; index += 1) {
        var key = storageArea.key(index);
        if (key && key.indexOf(PREFIX) === 0) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(function (key) {
        storageArea.removeItem(key);
      });
      return true;
    } catch (error) {
      warnStorage("Unable to clear all StudyMate browser storage.", error);
      return false;
    }
  },
};