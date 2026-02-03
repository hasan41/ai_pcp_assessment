# System Design Document: AI Primary Care Physician

## 1. Appointment Flow Architecture

The AI PCP system follows a standard primary care consultation structure, adapted for safety and remote interaction:

1.  **Introduction & Consent**:
    *   Greeting and disclaimer ("I am an AI... cannot replace in-person exam").
    *   Establish rapport ("I understand").

2.  **Chief Complaint & History of Present Illness (HPI)**:
    *   "What brings you in today?"
    *   **Mandatory Timeline Inquiry**: "When did this first start, and has it been getting better, worse, or staying the same?"

3.  **Triage Assessment (The Decision Node)**:
    *   The AI evaluates inputs against a high-risk symptom database (Chest pain, shortness of breath, severe blinding headache, etc.).
    *   **Path A: Emergency** -> Immediate Escalation Protocol.
    *   **Path B: Mild/Route** -> Detailed Symptom Analysis.

4.  **Action Plan**:
    *   **Emergency**: "Based on what you've told me..." + Assessment + Recommendation to care + "This is beyond what I can safely assess remotely".
    *   **Mild**: Validation ("That sounds really uncomfortable") + "What concerns you most?" + 3 Self-care recommendations.

5.  **Closing (Teach-back)**:
    *   "How does this sound to you?"

## 2. Decision Logic: Mild vs. Emergency

### Emergency Detection (Red Flags)
The system listens for specific keywords and semantic equivalents:
*   *Cardiac*: Chest pain, pressure, radiating pain, palpitations w/ dizziness.
*   *Respiratory*: Shortness of breath, gasping, blue lips.
*   *Neurological*: Slurred speech, sudden weakness, blinding headache ("worst of life").
*   *General*: Uncontrolled bleeding, severe abdominal pain.

**Response Protocol**:
*   Interrupt the standard flow.
*   Output the structured Emergency Response: 
    *   *Assessment*: "Based on what you've told me, these symptoms (X, Y) could indicate a condition requiring immediate attention."
    *   *Action*: "Here's what I recommend: Please go to the nearest Emergency Room immediately."
    *   *Safety*: "This is beyond what I can safely assess remotely."

### Mild Symptom Handling
For complaints classified as non-urgent (fatigue, tension headache, minor cold):
1.  **Validate**: "It's completely understandable that you're concerned about [symptom]."
2.  **Inquire**: "What concerns you most about this?"
3.  **Analyze**: Confirm timeline and severity.
4.  **Recommend**:
    *   Provide exactly **3** numbered recommendations.
    *   Must be self-care focused (Hydration, OTC guidance w/ disclaimer, Rest).

## 3. Escalation Protocols & Safety

*   **Trigger**: Any ambiguity or symptoms worsening rapidly.
*   **Timeframe**: All mild advice includes: "If this isn't improving in [X days], please contact your regular doctor."
*   **Linguistic Safety**:
    *   Jargon Free: "High blood pressure" (not Hypertension), "Heart attack" (not Myocardial Infarction).
    *   Empathy: "I understand."

## 4. Patient Experience Design

*   **Visuals**: Clean, calming interface. No "typing" raw text streams—smooth message bubbles.
*   **Tone**: Calm, professional, but warm.
*   **Interaction**: The AI drives the conversation but allows the patient to express concerns fully before prescribing.
