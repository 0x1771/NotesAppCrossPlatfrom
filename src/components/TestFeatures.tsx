import * as React from 'react';
import { createTestNote, validateNote } from '../utils/testUtils';
import { useNoteStore } from '../store/noteStore';
import { SecurityService } from '../services/securityService';
import { MediaService } from '../services/mediaService';
import { AIService } from '../services/aiService';

export function TestFeatures() {
  const { addNote, notes } = useNoteStore();
  const [testResults, setTestResults] = React.useState<string[]>([]);

  const runTests = async () => {
    const results: string[] = [];

    try {
      // Test note creation
      const testNote = createTestNote();
      addNote(testNote);
      results.push('✅ Note creation successful');

      // Test note validation
      if (validateNote(testNote)) {
        results.push('✅ Note validation successful');
      }

      // Test biometrics
      try {
        const biometricResult = await SecurityService.authenticateWithBiometrics();
        results.push(`✅ Biometrics ${biometricResult ? 'available' : 'not available'}`);
      } catch (e) {
        results.push('❌ Biometrics test failed');
      }

      // Test voice recognition
      try {
        await AIService.startVoiceRecognition();
        results.push('✅ Voice recognition initialized');
      } catch (e) {
        results.push('❌ Voice recognition test failed');
      }

    } catch (error) {
      results.push(`❌ Test failed: ${error.message}`);
    }

    setTestResults(results);
  };

  return (
    <gridLayout rows="auto, *" className="p-4">
      <button row={0} text="Run Tests" className="bg-blue-500 text-white p-2" onTap={runTests} />
      <scrollView row={1} className="mt-4">
        {testResults.map((result, index) => (
          <label key={index} text={result} className="mb-2" />
        ))}
      </scrollView>
    </gridLayout>
  );
}