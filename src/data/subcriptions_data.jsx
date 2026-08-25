class SubcriptionModel {
   constructor({
      price, type, isYearly, isPopular, description, features, buttonText,
   }) {
      this.price = price;
      this.type = type;
      this.isYearly = isYearly;
      this.description = description;
      this.features = features;
      this.buttonText = buttonText;
      this.isPopular = isPopular
   }
}
// export default SubcriptionModel;


const subsData = [
  // Base
  new SubcriptionModel({
    id: 'base-monthly',
    price: 80,
    type: 'Base',
    isYearly: false,
    isPopular: false,
    description: 'For individuals just getting started',
    features: ['1 project', 'Community support'],
    buttonText: 'Downgrade',
  }),
  new SubcriptionModel({
    id: 'base-yearly',
    price: 800, // e.g. ~2 months free vs 80*12=960
    type: 'Base',
    isYearly: true,
    isPopular: true,
    description: 'For individuals just getting started',
    features: ['1 project', 'Community support'],
    buttonText: 'Downgrade',
  }),

  // Pro
  new SubcriptionModel({
    id: 'pro-monthly',
    price: 120,
    type: 'Pro',
    isYearly: false,
    isPopular: true,
    description: 'Best for growing teams',
    features: ['Unlimited projects', 'Priority support', 'Custom domains'],
    buttonText: 'Upgrade to Pro',
  }),
  new SubcriptionModel({
    id: 'pro-yearly',
    price: 1200, // ~2 months free vs 120*12=1440
    type: 'Pro',
    isYearly: true,
    isPopular: false,
    description: 'Best for growing teams',
    features: ['Unlimited projects', 'Priority support', 'Custom domains'],
    buttonText: 'Upgrade to Pro',
  }),

  // Enterprise
  new SubcriptionModel({
    id: 'enterprise-monthly',
    price: 150,
    type: 'Enterprise',
    isYearly: false,
    isPopular: false,
    description: 'For large organizations with advanced needs',
    features: ['Unlimited everything', 'Dedicated support', 'SLA & SSO'],
    buttonText: 'Contact Sales',
  }),
  new SubcriptionModel({
    id: 'enterprise-yearly',
    price: 1500, // ~2 months free vs 150*12=1800
    type: 'Enterprise',
    isYearly: true,
    isPopular: false,
    description: 'For large organizations with advanced needs',
    features: ['Unlimited everything', 'Dedicated support', 'SLA & SSO'],
    buttonText: 'Contact Sales',
  }),
];

export default subsData;