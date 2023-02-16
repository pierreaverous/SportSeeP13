export class Modelisation {
  constructor(data) {
    this.data = data
  }

  /**
   * @description composant Bonjour

   * @return { object } Returns dataFormated after modelisation
   */

  formatUserName() {
    const dataFormated = this.data.userInfos.firstName

    return dataFormated
  }

  /**
   * @description composant Energie

   * @return { object } Returns dataFormated after modelisation
   */

  formatDataEnergy() {
    const dataFormated = this.data.keyData

    return dataFormated
  }

  /**
   * @description composant graphique

   * @return { object } Returns dataFormated after modelisation
   */
  formatDataActivity() {
    const dataFormated = this.data?.sessions.map((item, index) => {
      return {
        name: index + 1,
        uv: item.kilogram,
        pv: item.calories,
      }
    })

    return dataFormated
  }

  /**
   * @description composant Diagramme courbe

   * @return { object } Returns dataFormated after modelisation
   */
  formatDataSessions() {
    const dataFormated = this.data?.sessions.map((item) => {
      // convertit les nombres en jours
      switch (item.day) {
        case 1:
          item.day = 'L'
          break

        case 2:
          item.day = 'M'
          break
        case 3:
          item.day = 'M'
          break
        case 4:
          item.day = 'J'
          break
        case 5:
          item.day = 'V'
          break
        case 6:
          item.day = 'S'
          break
        case 7:
          item.day = 'D'
          break
        default:
      }
      return {
        name: item.day,
        pv: item.sessionLength,
      }
    })

    return dataFormated
  }

  /**
   * @description composant Diagramme Toile

   * @return { object } Returns dataFormated after modelisation
   */
  formatDataRadarChart() {
    const dataFormated = this.data?.data.map((item) => {
      return {
        subject: this.data?.kind[item.kind],
        A: item.value,
      }
    })
    return dataFormated
  }

  /**
   * @description composant Diagramme Score

   * @return { object } Returns dataFormated after modelisation
   */
  formatDataScore() {
    const dataFormated = this.data.todayScore * 100 || this.data.score * 100
    return dataFormated
  }
}
