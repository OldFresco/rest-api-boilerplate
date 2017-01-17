import BaseController from './base.controller';
import settings from '../config/settings';

class MetaController extends BaseController {
  index(req, res) {
		res.json({
			version : settings.apiVersion,
			health: 'ok'
		});
	}
}

export default new MetaController();