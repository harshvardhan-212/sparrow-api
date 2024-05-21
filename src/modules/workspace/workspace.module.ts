import { Module } from "@nestjs/common";
import { WorkspaceService } from "./services/workspace.service";
import { WorkSpaceController } from "./controllers/workspace.controller";
import { WorkspaceRepository } from "./repositories/workspace.repository";
import { IdentityModule } from "../identity/identity.module";
import { WorkspaceUserService } from "./services/workspace-user.service";
import { WorkspaceHandler } from "./handlers/workspace.handler";
import { AddUserHandler } from "./handlers/addUser.handler";
import { RemoveUserHandler } from "./handlers/removeUser.handler";
import { CollectionService } from "./services/collection.service";
import { CollectionRepository } from "./repositories/collection.repository";
import { collectionController } from "./controllers/collection.controller";
import { CollectionRequestService } from "./services/collection-request.service";
import { EnvironmentService } from "./services/environment.service";
import { EnvironmentRepository } from "./repositories/environment.repository";
import { EnvironmentController } from "./controllers/environment.controller";
import { PromoteAdminHandler } from "./handlers/promoteAdmin.handlers";
import { DemoteAdminHandler } from "./handlers/demoteAdmin.handlers";
import { FeatureController } from "./controllers/feature.controller";
import { FeatureService } from "./services/feature.service";
import { FeatureRepository } from "./repositories/feature.repository";
import { BranchService } from "./services/branch.service";
import { BranchRepository } from "./repositories/branch.repository";
import { FeedbackService } from "./services/feedback.service";
import { FeedbackRepository } from "./repositories/feedback.repository";
import { FeedbackController } from "./controllers/feedback.controller";
@Module({
  imports: [IdentityModule],
  providers: [
    WorkspaceService,
    WorkspaceRepository,
    WorkspaceUserService,
    WorkspaceHandler,
    AddUserHandler,
    RemoveUserHandler,
    PromoteAdminHandler,
    DemoteAdminHandler,
    CollectionRepository,
    CollectionService,
    CollectionRequestService,
    EnvironmentService,
    EnvironmentRepository,
    FeatureService,
    FeatureRepository,
    BranchService,
    BranchRepository,
    FeedbackService,
    FeedbackRepository,
  ],
  exports: [
    CollectionService,
    CollectionRepository,
    WorkspaceRepository,
    EnvironmentService,
    EnvironmentRepository,
    FeatureService,
    FeatureRepository,
    BranchService,
    BranchRepository,
    FeedbackService,
    FeedbackRepository,
  ],
  controllers: [
    WorkSpaceController,
    collectionController,
    EnvironmentController,
    FeatureController,
    FeedbackController,
  ],
})
export class WorkspaceModule {}
