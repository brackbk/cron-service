import axios, { AxiosResponse } from 'axios';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IResponseActionDTO from '@shared/dtos/IAutomationDTO';
@injectable()
class AutomationService {

    
  public async listActions(): Promise<IResponseActionDTO[] | undefined> {
    try {
        const automation = await axios.get<IResponseActionDTO[]>(process.env.AUTOMATION_SERVICE + "actions/list")
        return automation.data;
        
    } catch (error) {
        // console.log(error);
        throw new AppError('Error to request from Distribution-service');
    }
    
  }

}

export default AutomationService;
