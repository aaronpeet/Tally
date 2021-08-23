import { Auth0Provider } from '@bcwdev/auth0provider'
import { householdProfilesService } from '../services/HouseholdProfilesService'
import BaseController from '../utils/BaseController'

export class HouseholdProfilesController extends BaseController {
  constructor() {
    super('api/householdprofiles')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id/householdprofiles', this.getProfilesByHouseholdId)
      .post('', this.createHouseholdProfile)
  }

  async getProfilesByHouseholdId(req, res, next) {
    try {
      const householdProfiles = await householdProfilesService.getProfilesByHouseHoldId(req.query)
      res.send(householdProfiles)
    } catch (error) {
      next(error)
    }
  }

  // async getAccountByHouseholdId(req, res, next) {
  //   try {
  //     const accounts = await householdProfilesService.getAccountByHouseholdId(req.params.id)
  //     res.send(accounts)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  // async getHouseholdsByAccountId(req, res, next) {
  //   try {
  //     const households = await householdProfilesService.getHouseholdsByAccountId(req.params.id)
  //     res.send(households)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async createHouseholdProfile(req, res, next) {
    try {
      const householdProfile = await householdProfilesService.createHouseholdProfile(req.body)
      res.send(householdProfile)
    } catch (error) {
      next(error)
    }
  }
}