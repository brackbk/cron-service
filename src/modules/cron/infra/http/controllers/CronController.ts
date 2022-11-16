import AutomationService from '@shared/services/AutomationService';
import DistributionService from '@shared/services/DistributionService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class CronController {
  public async start(request: Request, response: Response): Promise<Response> {

    const automationService = container.resolve(AutomationService);

    const distributionService = container.resolve(DistributionService);

    const dataAutomation = await automationService.listActions();

    const botService = await automationService.listActions();
    console.log(dataAutomation);

    
    if (dataAutomation) {
      dataAutomation.map( async (data) => {
        switch (data.type_action)  {
          case 'whatsapp':
            await distributionService.sendWhats({
              templateId: data.template_id,
              fields: data.template_fields,
              to: '+5545999052903',
              channel: 'whatsapp',
            });
            break;
          case 'email':

            break;
          default:
            break;
        }
      });
    }

    return response.json(dataAutomation);
  }


}
