import {SkillDTO} from './skil-dto';
import {WorkExpDTO} from './work-exp-dto';

export interface CvDTO {
  id: number;
  expYear: number;
  salaryExpectation: number;
  fileCV: string;
  userId: number;
  fullName: string;
  username: string;
  phone: string;
  skills: SkillDTO[];
  workExps: WorkExpDTO[];
}
