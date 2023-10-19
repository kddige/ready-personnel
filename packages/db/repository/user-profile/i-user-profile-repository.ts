import type {
  UserProfileSchemaId,
  UserProfileSchemaInsert,
  UserProfileSchemaSelect,
} from "../../schema";

export interface IUserProfileRepository {
  list(): Promise<UserProfileSchemaSelect[]>;

  get(
    id: UserProfileSchemaId,
    orgId?: UserProfileSchemaSelect["orgId"],
  ): Promise<UserProfileSchemaSelect | null>;

  listByOrgId(
    orgId: UserProfileSchemaSelect["orgId"],
  ): Promise<UserProfileSchemaSelect[]>;

  create(data: UserProfileSchemaInsert): Promise<UserProfileSchemaSelect>;

  update(
    id: UserProfileSchemaId,
    data: Partial<UserProfileSchemaInsert>,
  ): Promise<UserProfileSchemaSelect>;

  delete(id: UserProfileSchemaId): Promise<void>;
}
