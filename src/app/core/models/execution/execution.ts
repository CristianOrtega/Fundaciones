interface IExecution {
    executionIdentifierExe: number;
	executionNameExe: string;
	executionStatusName: string;
	executionStartDateTimeExe: Date;
	executionEndDateTimeExe: Date;
	totalRecordsExe: number;
	completedRecordsExe: number;
}

export class Execution implements IExecution {
    executionIdentifierExe: number;
	executionNameExe: string;
	executionStatusName: string;
	executionStartDateTimeExe: Date;
	executionEndDateTimeExe: Date;
	totalRecordsExe: number;
	completedRecordsExe: number;
}