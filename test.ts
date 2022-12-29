// Contexte: on est sur une API et une de nos ressources est une voiture
// On veut pouvoir créer une voiture, la modifier, la supprimer, la récupérer

interface Car {
  id: string;
  brand: string;
  power: number;
  model: string;
  color: string | undefined;
  analyticsId: string | undefined;
  createdAt: Date;
  updatedAt: Date;
}

// L'objectif du premier exercice dans un premier temps est de créer le type
// correspondant à la récupération de la marque de la voiture et de sa couleur à partir de l'id

type CarBrandAndColor = Pick<Car, "brand" | "color">;

// L'objectif du second exercice est de créer le type correspondant
// à la récupération de la totalité des propriétés de la voiture à partir de l'id sauf
// la date de création et la date de modification

type CarWithoutDates = Omit<Car, "createdAt" | "updatedAt">;

// L'objectif du troisième exercice est de créer le type correspondant à la récupération des données mais
// comme c'est une lecture, on ne veut pas que ces propriétés soient modifiables

type CarRead = Readonly<CarWithoutDates>;

// L'objectif de la quatrière partie est de créer le type correspondant à la mise à jour d'une voiture
// Tous les champs peuvent être mis à jour sauf l'id, la date de création et la date de modification
// et peuvent être mis à jour sans préciser tous les champs

type CarUpdate = Partial<Omit<Car, "id" | "createdAt" | "updatedAt">>;

// On se place dans le contexte où on veut mettre une valeur par défaut pour tous les champs de la voiture de base
// Créer le type correspondant

type CarWithDefaults = Required<Car>;

// On a une liste de marque de voiture et on veut créer le type associé avec toutes les marques et leurs propriétés

type CarBrands =
  | "Renault"
  | "Peugeot"
  | "Toyota"
  | "Volkswagen"
  | "Skoda"
  | "Citroën"
  | "Fiat"
  | "Mini"
  | "Honda"
  | "Nissan";

interface BrandInfo {
  id: string;
  creationDate: Date;
  originCountry: string;
}

type CarBrandsWithProperties = Record<CarBrands, BrandInfo>;

// On ne veut que les marques qui ne sont pas japonaises

type CarBrandsJapanese = Extract<CarBrands, "Toyota" | "Honda" | "Nissan">;

type CarBrandsWithoutJapanese = Exclude<
  CarBrands,
  "Toyota" | "Honda" | "Nissan"
>;
