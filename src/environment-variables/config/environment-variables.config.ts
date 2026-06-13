import { EnvironmentVariables } from '../interfaces/environment-variables/environment-variables.interface';

export default () =>
  <Partial<EnvironmentVariables>>{
    PORT: parseInt(process?.env?.PORT ?? 'NAN', 10) || 3001,
  };
