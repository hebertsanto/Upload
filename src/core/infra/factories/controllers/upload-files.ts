import { UploadFilesController } from '../../../../api/presentation/controllers/multi-upload-controller'
import { Controller } from '../../../application/domain/controller'
import { makeUploadFilesUseCase } from '../usecases/upload-files'

export const makeUploadFilesController = (): Controller => {
  return new UploadFilesController(makeUploadFilesUseCase())
}
