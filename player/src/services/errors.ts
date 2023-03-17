import { CustomError } from "ts-custom-error";

export class MissingParameter extends CustomError {
  public constructor(message?: string) {
    super(
      message ||
        "A required parameter was missing from the router params object"
    );
  }
}

export class RecordNotFound extends CustomError {
  public constructor(message?: string) {
    super(message || "A required record was not found in the store");
  }
}

export class MissingLocalFileHandle extends CustomError {
  public constructor(message?: string) {
    super(message || "A problem occured with a local file");
  }
}

export class MissingRequiredAPIs extends CustomError {
  public constructor(message?: string) {
    super(message || "APIs that are required to run vodon-player were missing");
  }
}

export class InvalidVideo extends CustomError {
  public constructor(message?: string) {
    super(message || "The video was invalid in some way");
  }
}

export class InvalidDomLayout extends CustomError {
  public constructor(message?: string) {
    super(message || "The dom was invalid in some way");
  }
}

export class UnknownDirection extends CustomError {
  public constructor(message?: string) {
    super(
      message ||
        "An invalid direction was passed and we didn't know what to do with it"
    );
  }
}

export class UnknownMessage extends CustomError {
  public constructor(message?: string) {
    super(
      message || "Add message was given but no known action could be taken"
    );
  }
}

export class SessionInInvalidState extends CustomError {
  public constructor(message?: string) {
    super(
      message ||
        "An action was taken with the session but it was in an invalid state"
    );
  }
}

export class UnknownFileSource extends CustomError {
  public constructor(message?: string) {
    super(
      message ||
        "We attempted to use the file source to store a file but could not determine the type"
    );
  }
}

export class MediaInfoInstanceNotReady extends CustomError {
  public constructor(message?: string) {
    super(message || "The MediaInfo instance was used before it was ready");
  }
}
