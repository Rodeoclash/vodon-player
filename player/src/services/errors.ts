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
