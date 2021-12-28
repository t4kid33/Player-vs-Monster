new Vue({
   el: "#app",
   data: {
      playerLife: 100,
      monsterLife: 100,
      hp: false,

   },
   computed: {
      hasResult() {
         return this.playerLife == 0 || this.monsterLife == 0;
      }
   },
   watch: {
      hasResult(value) {
         if (value) this.hp = false;
      }
   },
   methods: {
      startGame() {
         this.hp = true;
         this.playerLife = 100;
         this.monsterLife = 100;
      
      },
      attack(special) {
         this.hurt("monsterLife", 3, 10, special, 'Player', 'Monster', 'player');
         if (this.monsterLife) {
            this.hurt("playerLife", 5, 15, false, 'Monster', 'Player', 'monster');
         };
      },
      attackspecial(special) {
            this.hurt("monsterLife", 10, 20, special, 'Player', 'Monster', 'player');
            if (this.monsterLife) {
               this.hurt("playerLife", 5, 15, false, 'Monster', 'Player', 'monster');
            };
      },
      hurt(atr, min, max, special) {
         const plus = special ? 5 : 0;
         const hurt = this.randomDamage(min + plus, max + plus);
         this[atr] = Math.max(this[atr] - hurt, 0);
      },
      randomDamage: function(min, max) {
         return Math.max(Math.floor(Math.random() * max) +1, min);
      },
   }
});