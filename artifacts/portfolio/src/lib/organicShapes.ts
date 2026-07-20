/**
 * Organic Shape Variants
 * Unique asymmetric border-radius combinations for distinctive design
 */

export const organicShapes = {
  // Card shapes - asymmetric and organic
  card1: 'rounded-[32px_8px_32px_8px]',
  card2: 'rounded-[8px_32px_8px_32px]',
  card3: 'rounded-[40px_12px_40px_12px]',
  card4: 'rounded-[12px_40px_12px_40px]',
  card5: 'rounded-[36px_16px_36px_16px]',
  card6: 'rounded-[16px_36px_16px_36px]',
  
  // Button shapes - distinctive
  button1: 'rounded-[24px_24px_4px_24px]',
  button2: 'rounded-[4px_24px_24px_24px]',
  button3: 'rounded-[28px_8px_28px_8px]',
  button4: 'rounded-[8px_28px_8px_28px]',
  
  // Input shapes
  input1: 'rounded-[16px_16px_4px_16px]',
  input2: 'rounded-[4px_16px_16px_16px]',
  
  // Large container shapes
  hero1: 'rounded-[48px_16px_48px_16px]',
  hero2: 'rounded-[16px_48px_16px_48px]',
  
  // Pill shapes - for tags
  pill1: 'rounded-[20px_6px_20px_6px]',
  pill2: 'rounded-[6px_20px_6px_20px]',
  
  // Modal shapes
  modal: 'rounded-[44px_12px_44px_12px]',
};

// Shape morphing pairs (for hover effects)
export const shapeMorphing = {
  card: {
    default: organicShapes.card1,
    hover: organicShapes.card2,
  },
  button: {
    default: organicShapes.button1,
    hover: organicShapes.button2,
  },
  input: {
    default: organicShapes.input1,
    focus: organicShapes.input2,
  },
};

// Random organic shape generator for variety
export const getRandomOrganic = (type: 'card' | 'button' | 'input' | 'pill' = 'card') => {
  const shapes = {
    card: [organicShapes.card1, organicShapes.card3, organicShapes.card5],
    button: [organicShapes.button1, organicShapes.button3],
    input: [organicShapes.input1, organicShapes.input2],
    pill: [organicShapes.pill1, organicShapes.pill2],
  };
  
  const options = shapes[type];
  return options[Math.floor(Math.random() * options.length)];
};

export default organicShapes;
