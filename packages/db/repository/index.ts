import type { IUserProfileRepository } from "./user-profile/i-user-profile-repository";
import { UserProfileRepository } from "./user-profile/user-profile-repository";

interface IRepository {
  userProfile: IUserProfileRepository;
}

const repository: IRepository = {
  userProfile: new UserProfileRepository(),
};

export { repository };
