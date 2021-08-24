import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class ProfileController extends BaseController {
  constructor() {
    super('profile')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getProfileById)
      .get('/:id/results', this.getResultsByProfileId)
  }

  async getProfileById(req, res, next) {
    try {
      const profile = await accountService.getProfileById(req.params.id)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }

  async getResultsByProfileId(req, res, next) {
    try {
      const results = await accountService.getResultsByProfileId(req.params.id)
      res.send(results)
    } catch (error) {
      next(error)
    }
  }
}
