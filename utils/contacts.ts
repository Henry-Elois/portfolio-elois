import pb from "./pb";

export interface ContactData {
  prenom: string;
  nom: string;
  email: string;
  message: string;
}

export async function createContact(data: ContactData) {
  try {
    const record = await pb.collection("contact").create({
      prenom: data.prenom,
      nom: data.nom,
      email: data.email,
      message: data.message,
    });
    return { success: true, record };
  } catch (error: any) {
    console.error(
      "Une erreur est survenue lors de la création du contact",
      error
    );
    return { success: false, error: error.message || "Erreur inconnue" };
  }
}
