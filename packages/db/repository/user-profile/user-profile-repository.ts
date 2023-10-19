import { nanoid } from "nanoid";

import type { SQL } from "../..";
import { and, db, eq } from "../..";
import { userProfileSchema } from "../../schema";
import type {
  UserProfileSchemaId,
  UserProfileSchemaInsert,
  UserProfileSchemaSelect,
} from "../../schema";
import type { IUserProfileRepository } from "./i-user-profile-repository";

export class UserProfileRepository implements IUserProfileRepository {
  async list(): Promise<UserProfileSchemaSelect[]> {
    return await db.select().from(userProfileSchema);
  }

  async get(
    id: UserProfileSchemaId,
    orgId?: UserProfileSchemaSelect["orgId"],
  ): Promise<UserProfileSchemaSelect | null> {
    const where: SQL[] = [eq(userProfileSchema.id, id)];

    if (orgId) {
      where.push(eq(userProfileSchema.orgId, orgId));
    }

    const userProfile = await db
      .select()
      .from(userProfileSchema)
      .where(and(...where))
      .limit(1);

    return userProfile[0] ?? null;
  }

  async listByOrgId(
    orgId: UserProfileSchemaSelect["orgId"],
  ): Promise<UserProfileSchemaSelect[]> {
    const userProfiles = await db
      .select()
      .from(userProfileSchema)
      .where(eq(userProfileSchema.orgId, orgId));

    return userProfiles;
  }

  async create(
    data: UserProfileSchemaInsert,
  ): Promise<UserProfileSchemaSelect> {
    const id: UserProfileSchemaId = nanoid();

    const createdResult = await db.insert(userProfileSchema).values({
      ...data,
      id,
    });

    if (createdResult.rowsAffected !== 1) {
      throw new Error("Could not create user profile");
    }

    const userProfile = await this.get(id);

    if (!userProfile) {
      throw new Error("Could not create user profile");
    }

    return userProfile;
  }

  async update(
    id: UserProfileSchemaId,
    data: Partial<UserProfileSchemaInsert>,
  ): Promise<UserProfileSchemaSelect> {
    const updatedResult = await db
      .update(userProfileSchema)
      .set(data)
      .where(eq(userProfileSchema.id, id));

    if (updatedResult.rowsAffected !== 1) {
      throw new Error("Could not update user profile");
    }

    const userProfile = await this.get(id);

    if (!userProfile) {
      throw new Error("Could not update user profile");
    }

    return userProfile;
  }

  async delete(id: UserProfileSchemaId): Promise<void> {
    await db.delete(userProfileSchema).where(eq(userProfileSchema.id, id));
  }
}
