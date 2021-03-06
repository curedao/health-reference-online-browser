import { SpecialParameter } from "src/models/biomarker.model";

export const medicationParameters: SpecialParameter[] = [
    { id: 'description', name_long: 'Prescription description', unit: '{string}' },
    { id: 'generic_name', name_long: 'Generic Name', unit: '{string}' },
    { id: 'trade_name', name_long: 'Trade Name', unit: '{string}' },
    { id: 'rxnorm_code', name_long: 'Rxnorm Code', unit: '{#}' },
    { id: 'route', name_long: 'Route', unit: '{string}' },
    { id: 'prescription_trigger', name_long: 'Prescription Trigger', unit: '{string}' },
    { id: 'medication_adherence_percent', name_long: 'Medication Adherence Percent', unit: '%' },
    // TODO: strength
    // TODO: schedule
];

export const supplementationParameters = [
    { id: 'description', name_long: 'Application description', unit: '{string}' },
    { id: 'generic_name', name_long: 'Generic Name', unit: '{string}' },
    // TODO: strength
    // TODO: schedule
];

// From: https://www.openmhealth.org/documentation/#/schema-docs/schema-library/schemas/omh_medication

export const medicationIngredientsUnits = [
    "%",
    "AU",
    "AU/mL",
    "BAU",
    "BAU/mL",
    "BU",
    "CCID_50",
    "Ci",
    "cm^2",
    "D'ag'U",
    "dL",
    "FFU",
    "g",
    "hp_C",
    "hp_M",
    "hp_Q",
    "hp_X",
    "IU",
    "IU/L",
    "IU/mL",
    "kp_C",
    "L",
    "Lf",
    "LfU/mL",
    "mCi",
    "mCi/mL",
    "mEq",
    "mg",
    "mg/actuat",
    "mg/hr",
    "mg/mg",
    "mg/mL",
    "mL",
    "mmol",
    "mol",
    "mU",
    "ng",
    "nmol",
    "organisms",
    "PFU",
    "PNU",
    "PNU/mL",
    "TCID_50",
    "U",
    "uCi",
    "ug",
    "ug/mL",
    "uL",
    "umol",
    "unt",
    "unt/mL",
    "USP'U",
    "X"
];

// From: https://www.openmhealth.org/documentation/#/schema-docs/schema-library/schemas/omh_intervention-administration-route

export const interventionAdministrationRoute = [
    "arteriovenous fistula",
    "arteriovenous graft",
    "body cavity",
    "auricular",
    "buccal",
    "caudal",
    "colostomy",
    "conjunctival",
    "cutaneous",
    "dental",
    "digestive tract",
    "electro-osmosis",
    "endocervical",
    "endosinusial",
    "endotracheopulmonary",
    "enteral",
    "epidural",
    "esophagostomy",
    "extra-amniotic",
    "extracorporeal",
    "fistula",
    "gastro-intestinal stoma",
    "gastroenteral",
    "gastrostomy",
    "gingival",
    "ileostomy",
    "hemodialysis",
    "infiltration",
    "interstitial",
    "intra-abdominal",
    "intra-amniotic",
    "intra-arterial",
    "intra-articular",
    "intrabiliary",
    "intrabronchial",
    "intrabursal",
    "intracameral",
    "intracardiac",
    "intracartilaginous",
    "intracaudal",
    "intracavernous",
    "intracavitary",
    "intracerebral",
    "intracerebroventricular",
    "intracisternal",
    "intracolonic",
    "intracorneal",
    "intracoronal",
    "intracoronary",
    "intracorporus cavernosum",
    "intracranial",
    "intradermal",
    "intradiscal",
    "intraductal",
    "intraduodenal",
    "intradural",
    "intraepicardial",
    "intraepidermal",
    "intraesophageal",
    "intragastric",
    "intragingival",
    "intrahepatic",
    "intraileal",
    "intrajejunal",
    "intralesional",
    "intralingual",
    "intraluminal",
    "intralymphatic",
    "intramammary",
    "intramedullary",
    "intrameningeal",
    "intramural",
    "intramuscular",
    "intramyometrial",
    "intraneural",
    "intranodal",
    "intraocular",
    "intraomentum",
    "intraosseous",
    "intraovarian",
    "intrapericardial",
    "intraperitoneal",
    "intrapleural",
    "intraprostatic",
    "intrapulmonary",
    "intraruminal",
    "intrasinal",
    "intraspinal",
    "intrasternal",
    "intrasynovial",
    "intratendinous",
    "intratesticular",
    "intrathecal",
    "intrathoracic",
    "intratubular",
    "intratumor",
    "intratympanic",
    "intrauterine",
    "intravascular",
    "intravenous",
    "intravenous central",
    "intravenous peripheral",
    "intraventricular - cardiac",
    "intravesical",
    "intravitreal",
    "iontophoresis",
    "irrigation",
    "jejunostomy",
    "laryngeal",
    "lower respiratory tract",
    "mucous fistula",
    "nasal",
    "nasoduodenal",
    "nasogastric",
    "nasojejunal",
    "not applicable",
    "occlusive dressing technique",
    "ophthalmic",
    "oral",
    "orogastric",
    "oromucosal",
    "oropharyngeal",
    "otic",
    "parenteral",
    "paracervical",
    "paravertebral",
    "percutaneous",
    "periarticular",
    "peribulbar",
    "peridural",
    "perineural",
    "periodontal",
    "periosteal",
    "peritendinous",
    "periurethral",
    "rectal",
    "respiratory tract",
    "retrobulbar",
    "soft tissue",
    "subarachnoid",
    "subconjunctival",
    "subcutaneous",
    "subgingival",
    "sublesional",
    "sublingual",
    "submucosal",
    "suborbital",
    "subretinal",
    "subtendinous",
    "surgical cavity",
    "surgical drain",
    "topical",
    "transcervical",
    "transdermal",
    "transendocardial",
    "transmucosal",
    "transplacental",
    "transtracheal",
    "transtympanic",
    "transurethral",
    "tumor cavity",
    "ureteral",
    "urethral",
    "urostomy",
    "vaginal"
];