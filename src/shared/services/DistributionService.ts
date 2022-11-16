import axios, { AxiosResponse } from 'axios';
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import { ITemplateRequestDTO, IMailRequestDTO } from '@shared/dtos/IDistributionRequestDTO';
@injectable()
class DistributionService {

    
  public async sendWhats(data:ITemplateRequestDTO): Promise<string[] | undefined> {

    try {
        return await axios.post(process.env.DISTRIBUTION_SERVICE + "zenvia/sendByTemplate",data)
    
    } catch (error) {
        console.log(error);
        throw new AppError('Error to request from Distribution-service');
    }
  }


  public async sendMail(data:IMailRequestDTO): Promise<string[] | undefined> {

    try {
        return await axios.post(process.env.DISTRIBUTION_SERVICE + "zenvia/sendMail",data)
    
    } catch (error) {
        console.log(error);
        throw new AppError('Error to request from Distribution-service');
    }
  }
}

export default DistributionService;
