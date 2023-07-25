import { IsEnum } from 'class-validator';
import { TaskStatus } from 'src/tasks/task-status.enum.model';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
