package osef;

import java.util.Scanner;

public class Radius {
    public static void main(final String[] args) {

        Scanner sc = new Scanner(System.in);

        double Wavelength;
        // nombre de calculs
        int n;

        System.out.println("combiens de rayons souhaitez vous calculer?");

        n = sc.nextInt();

        double rdTab[][] = new double[2][n];

        // boucle d'acquisition des données
        for (int i = 0; i <= n - 1; i++) {

            System.out.println("Veuillez rentrer la longueur d'onde" + (i + 1) + " (nm) en utilisant , au lieu de . ");

            rdTab[0][i] = sc.nextDouble();

            rdTab[1][i] = getRayon(rdTab[0][i]);

        }

        // affichage des resultats
        System.out.println("Longueur d'onde  |  rayon du nanocristal(nm)  ");
        for (int i = 0; i <= n - 1; i++) {

            System.out.println(rdTab[0][i] + " nm | " + rdTab[1][i] + " nm");

        }

    }

    public static double getRayon(double Wavelength) {

        // constante de planck
        double h = 6.62607004 * Math.pow(10, -34);
        // célerité de la lumière dans le vide
        double c = 3 * Math.pow(10, 8);
        // énergie de gap
        double eg = 1.8258 * 1.60218 * Math.pow(10, -19);
        // masse de l'electron
        double me = 9.10938356 * Math.pow(10, -31);
        // masse effective de l'electron poiur le CdSe
        double meCdse = 0.13 * me;
        // masse effective du gap pour le CdSe
        double mgCdSe = 0.55 * me;
        // energie du photon
        double e = (h * c) / (Wavelength * Math.pow(10, -9));
        // calcul du rayon
        double radius = Math.sqrt(Math.pow(h, 2) * Math.pow(Math.PI, 2) / (2 * (e - eg)) * ((1 / meCdse) + (1 / mgCdSe)));

        // conversion en nm
        radius = radius * Math.pow(10, 9);

        return radius;

    }

}