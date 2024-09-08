import { IDeleteFileUseCase } from '../../application/usecases/delete-file-use-case'
import { Request } from 'express'
import { HttpStatusCode } from '../../domain/http-status'
import { Controller, HttpResponse } from '../../domain/controller'

export class DeleteFileController implements Controller {
  constructor(private readonly deleteFileUseCase: IDeleteFileUseCase) {}
  public async handle(req: Request): Promise<HttpResponse> {
    try {
      const { id } = req.params
      await this.deleteFileUseCase.invoke(id)
      return {
        msg: 'File deleted successfully',
        statusCode: HttpStatusCode.Ok,
      }
    } catch (error) {
      return {
        msg: error.message,
        statusCode: error.statusCode,
      }
    }
  }
}
