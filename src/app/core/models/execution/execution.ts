interface IExecution {
    executionIdentifierExe: number;
	executionNameExe: string;
	executionStatusCode: string;
	executionStatusDescription: string;
	executionStartDateTimeExe: Date;
	executionEndDateTimeExe: Date;
	progress: string;
}

export class Execution implements IExecution {
    executionIdentifierExe: number;
	executionNameExe: string;
	executionStatusCode: string;
	executionStatusDescription: string;
	executionStartDateTimeExe: Date;
	executionEndDateTimeExe: Date;
	progress: string;
}