# Reflection

## Key Limitations
1.  **Lack of Visual Input**: Primary care often relies on visual inspection (throat color, rash texture, gait). Text-only assessment significantly limits diagnostic accuracy for dermatological or musculoskeletal issues.
2.  **Context Window**: While sufficient for a short consult, the current prototype does not retain long-term patient history or medication lists, which are critical for safe drug interaction checks.
3.  **Nuance in "Pain"**: Text descriptions of pain ("level 7") are subjective. The system struggles to differentiate between a dramatic "level 10" (anxiety-driven) and a stoic "level 4" (serious pathology) without tonality or vital signs.

## Enhancements for Production
1.  **Multimodal Integration**: Allow users to upload secure photos of rashes or injuries for Computer Vision analysis (using GPT-4o Vision features).
2.  **EHR Integration**: Connect the backend to Epic/Cerner via FHIR standards to pull patient history, allergies, and current medications automatically.
3.  **Voice Interaction**: Implement a real-time voice layer (WebRTC) to allow natural conversation, enabling the system to analyze vocal biomarkers (e.g., shortness of breath in speech patterns).

## Surprises
I was surprised by how effective simple **Prompt Engineering**—specifically the "Chain of Thought" structure in the system instructions—was at enforcing empathy. Simply instructing the AI to "acknowledge first" completely changed the perceived warmth of the interaction, transforming it from a "bot" to a "partner" without any complex code changes.
