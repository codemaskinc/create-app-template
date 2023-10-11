import { Question, QuestionItem } from '../../types/index.js'
import { appDir } from './appDir.js'
import { extras } from './extras.js'
import { template } from './template.js'

export const questions = {
    [Question.AppDir]: appDir,
    [Question.Template]: template,
    [Question.Extras]: extras
} satisfies Record<Question, QuestionItem>
