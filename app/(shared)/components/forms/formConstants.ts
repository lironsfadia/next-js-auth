import { VehicleAvailability, DriverTypes, VehicleManufacturer, VehicleModal } from '@/constants/enums';

export type LogInFormValues = {
  email: string;
  password: string;
};

export type SignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  socialMediaLink: string;
  password: string;
  offRoadVehicle: VehicleAvailability;
  driverType: DriverTypes;
  hitchhikersNumber: number;
  vehicleManufacturer: VehicleManufacturer;
  vehicleModal: VehicleModal;
  vehicleVersion: string;
  carFeatureShields: boolean;
  carFeatureCentralDiffLock: boolean;
  carFeatureRearDiffLock: boolean;
  carFeatureFrontDiffLock: boolean;
  carFeatureLowGear: boolean;
  carFeatureWinch: boolean;
  carFeatureRoofTop: boolean;
  carFeatureTowingHook: boolean;
  carFeatureTSC: boolean;
  carFeatureRadio: boolean;
  carFeatureTires: boolean;
};

export const VEHICLE_AVAILABILITY_OPTION = [
  { value: VehicleAvailability.AVAILABLE_VEHICLE, text: 'כן. ואגיע איתו לטיולים.' },
  { value: VehicleAvailability.UNAVAILABLE_VEHICLE, text: 'לא. אשמח להתארח ברכב.' },
];

export const HITCHHIKERS_OPTIONS = [
  { value: 0, text: 'מעדיף שלא' },
  { value: 1, text: 'מוכן לצרף נוסע אחד נוסף בלבד' },
  { value: 2, text: 'מוכן לצרף עד 2 נוסעים' },
  { value: 3, text: 'מוכן לצרף עד 3 נוסעים' },
];

export const DRIVER_OPTIONS = [
  { value: DriverTypes.BEGINNER, text: 'מתחיל בתחום' },
  { value: DriverTypes.INTERMEDIATE, text: 'צברתי ניסיון בנהיגת שטח' },
  { value: DriverTypes.ADVANCED, text: 'אני נהג שטח מנוסה' },
];

export const VEHICLE_MODAL_OPTIONS = {
  [VehicleManufacturer.ISUZU]: [
    { value: VehicleModal.DMAX, text: 'דימקס' },
    { value: VehicleModal.TROOPER, text: 'טרופר' },
    { value: VehicleModal.RODEO, text: 'רודיאו' },
  ],
  [VehicleManufacturer.JEEP]: [
    { value: VehicleModal.COMPASS, text: 'קומפאס' },
    { value: VehicleModal.GLADIATOR, text: 'גלדיאטור' },
    { value: VehicleModal.GRAND_CHEROKEE, text: 'גרנד צרוקי' },
    { value: VehicleModal.WRANGLER, text: 'רנגלר' },
  ],
};

export const VEHICLE_VERSION_OPTIONS = {
  // Isusu
  [VehicleModal.DMAX]: [
    { value: 'skip', text: 'דלג (לא יודע)' },
    { value: 'long', text: 'ארוך בנזין' },
    { value: 'long_Diesel', text: 'ארוך דיזל' },
    { value: 'short', text: 'קצר בנזין' },
  ],
  [VehicleModal.RODEO]: [],
  [VehicleModal.TROOPER]: [
    { value: 'skip', text: 'דלג (לא יודע)' },
    { value: 'long', text: 'ארוך בנזין' },
    { value: 'long_Diesel', text: 'ארוך דיזל' },
    { value: 'short', text: 'קצר בנזין' },
  ],
  // Jeep
  [VehicleModal.GLADIATOR]: [],
  [VehicleModal.GRAND_CHEROKEE]: [
    { value: 'skip', text: 'דלג (לא יודע)' },
    { value: 'old_ages', text: 'דורות ישנים, כולל WK' },
    { value: 'new_ages', text: 'דורות חדשים, משנת 2011 ואילך' },
  ],
  [VehicleModal.COMPASS]: [
    { value: 'skip', text: 'דלג (לא יודע)' },
    { value: '4X2', text: '4X2' },
    { value: '4X4', text: '4X4' },
  ],
  [VehicleModal.WRANGLER]: [
    { value: 'skip', text: 'דלג (לא יודע)' },
    { value: 'robicon', text: 'רוביקון' },
    { value: 'sport', text: 'ספורט / סהרה' },
  ],
};

export const formCheckboxes: {
  checkboxId: string;
  checkboxLabelText: string;
}[] = [
  { checkboxId: 'carFeatureShields', checkboxLabelText: 'הגבהה' },
  { checkboxId: 'carFeatureLowGear', checkboxLabelText: 'הילוך כוח' },
  { checkboxId: 'carFeatureCentralDiffLock', checkboxLabelText: 'נעילה מרכזית' },
  { checkboxId: 'carFeatureRearDiffLock', checkboxLabelText: 'נעילה אחורית' },
  { checkboxId: 'carFeatureFrontDiffLock', checkboxLabelText: 'נעילה קדמית' },
  { checkboxId: 'carFeatureTowingHook', checkboxLabelText: 'וו גרירה' },
  { checkboxId: 'carFeatureWinch', checkboxLabelText: 'כוננת' },
  { checkboxId: 'carFeatureTSC', checkboxLabelText: 'בקרת משיכה' },
  { checkboxId: 'carFeatureRadio', checkboxLabelText: 'מכשיר קשר (קבוע או נייד)' },
  { checkboxId: 'carFeatureRoofTop', checkboxLabelText: 'גגון' },
  { checkboxId: 'carFeatureTires', checkboxLabelText: 'צמיגי שטח (מלא, או 50-50)' },
];
