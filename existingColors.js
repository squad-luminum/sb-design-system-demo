const newColors = {
    "color-blue-10": "#f6fbfe",
    "color-blue-20": "#E9F5FC",
    "color-blue-30": "#DCEFFA",
    "color-blue-40": "#CAE6F7",
    "color-blue-50": "#B8DDF4",
    "color-blue-60": "#83C4EC",
    "color-blue-70": "#4EABE4",
    "color-blue-80": "#1A98DF",
    "color-blue-90": "#1C8FD3",
    "color-blue-100": "#1E85C6",
    "color-blue-110": "#1B78B1",
    "color-blue-120": "#186CA0",
    "color-blue-130": "#116392",
    "color-blue-140": "#0D4A6E",
    "color-blue-150": "#0B3E5B",
    "color-neutral-10": "#FCFDFE",
    "color-neutral-20": "#F7F9FC",
    "color-neutral-30": "#F1F5F9",
    "color-neutral-40": "#E4EAF1",
    "color-neutral-50": "#D8E0E9",
    "color-neutral-60": "#C4CEDB",
    "color-neutral-70": "#B0BCCD",
    "color-neutral-80": "#94A3B8",
    "color-neutral-90": "#7C8CA2",
    "color-neutral-100": "#64748B",
    "color-neutral-110": "#56657A",
    "color-neutral-120": "#485569",
    "color-neutral-130": "#344255",
    "color-neutral-140": "#2B384A",
    "color-neutral-150": "#1A2533",
    "color-green-10": "#EFFBF8",
    "color-green-20": "#DFF7F1",
    "color-green-30": "#CEF2EB",
    "color-green-40": "#AEEADE",
    "color-green-50": "#8DE2CF",
    "color-green-60": "#6DD9C2",
    "color-green-70": "#4DD1B4",
    "color-green-80": "#3FC5A8",
    "color-green-90": "#30B99B",
    "color-green-100": "#2AA288",
    "color-green-110": "#26927A",
    "color-green-120": "#21826D",
    "color-green-130": "#1D725F",
    "color-green-140": "#155144",
    "color-green-150": "#114136"
};

const nearestColor = require('nearest-color').from(newColors);

const existingColors = [
    '#477FBA',
    '#3B93EE',
    '#3E4B68',
    '#292D38',
    '#FCFDFE',
    '#E2E8F0',
    '#ADB5C7',
    '#7F869D',
    '#EB3330',
    '#1EB785',
    '#E6444E',
    '#FA9529',
    '#AB5DB0',
    '#FB5C67',
    '#CF2A2B',
    '#ECF4FF',
    '#646A7E',
    '#F2F6FA',
    '#CED7E2',
    '#FFC44F',
    '#FFFCEE',
    '#E7F7F2',
    '#FDEDEE',
    '#90C3E3',
    '#333744',
    '#393D4C',
    '#424551',
    '#0C1017',
    '#121820',
    '#1B2026',
    '#18232F',
    '#1B242F',
    '#1D2939',
    '#212F41',
    '#253548',
    '#273D58',
    '#2D3B4D',
    '#233C57',
    '#2F5278',
    '#335880',
    '#4973AA',
    '#66AAFF',
    '#8FC2E5',
    '#343F4E',
    '#3D526B',
    '#454F5B',
    '#455262',
    '#545A61',
    '#585858',
    '#68727F',
    '#656F7B',
    '#959EB0',
    '#9BA4B6',
    '#A4A9B3',
    '#AFBECB',
    '#B8C7D5',
    '#DCDFE6',
    '#E2E5EB',
    '#6A3539',
    '#894442',
    '#FD7D87',
    '#154D40',
    '#FFC63D',
    '#8EC3E5',
    '#1D2029',
    '#292D39',
    '#636A7F',
    '#E02020',
    '#FFA900',
    '#364353',
    '#444444',
    '#6B5D3D',
    '#101517',
    '#393939',
    '#687284'];

existingColors.forEach(existingColor => {
    const result = nearestColor(existingColor);
    console.log(`${existingColor}: --${result.name}`);
});

