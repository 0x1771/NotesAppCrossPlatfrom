import { Biometrics } from '@nativescript/biometrics';

export class SecurityService {
  private static biometrics = new Biometrics();

  static async authenticateWithBiometrics(): Promise<boolean> {
    try {
      const result = await this.biometrics.verifyFingerprintOrFaceId({
        message: 'Authenticate to access your notes',
      });
      return result.code === 'SUCCESS';
    } catch (error) {
      console.error('Biometric authentication error:', error);
      return false;
    }
  }

  static async encryptData(data: string): Promise<string> {
    // Implement encryption
    return data;
  }

  static async decryptData(data: string): Promise<string> {
    // Implement decryption
    return data;
  }
}