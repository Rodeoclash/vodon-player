/**
 * Data models implementing this can be stored in the OPFS or cloud storage
 * backend.
 */
export interface Storable {
  id: string;
  filePath: string;
  fileSource: Blob | FileSystemFileHandle | null;
  fileHandlesTable: string;
}
