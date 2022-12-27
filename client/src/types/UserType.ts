type User =
  | {
      status: 'fetching';
    }
  | {
      status: 'empty';
    }
  | {
      status: 'logged';
      id: number;
      username: string;
    };

type BackendUser = {
  id: number;
  username: string;
};

type UserInput = {
  username: string;
  password: string;
};

export type { UserInput, User, BackendUser };
