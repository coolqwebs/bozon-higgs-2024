interface IUser {
  id: string;
  userName: string;
  levelType: number;
  totalSpentTime: number;
  lastLevelStartedDateTime: string;
  usedHintsCount: number;
}

interface IError {
  errors: {
    [key: string]: string[];
  };
}

interface ILevel {
  id: string;
  name: string;
  description: string;
  link: string;
  type: number;
  hint?: string;
  token: string;
  nextLevelId?: string;
}
