import { EnvironmentVariableInterface } from '../interfaces/config/environment-variable-interface/environment-variable-interface.interface';

export default () =>
  <Partial<EnvironmentVariableInterface>>{
    PORT: parseInt(process?.env?.PORT ?? 'NAN', 10) || 3001,
  };
