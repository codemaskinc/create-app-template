import { CallHandler, ExecutionContext, NestInterceptor, UnsupportedMediaTypeException } from '@nestjs/common'
import { Request } from 'express'
import { hasBody } from '../utils'

export class ContentTypeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
        const request = context.switchToHttp().getRequest<Request>()

        if (hasBody(request.method) && !request.is('json')) {
            throw new UnsupportedMediaTypeException()
        }

        return next.handle()
    }
}
