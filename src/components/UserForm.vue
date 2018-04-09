<template>
  <div class="wrapper">
    <p>
      <label> First Name *</label>
      <input v-model="user.firstName" placeholder="Your first name" required>
    </p>
    
    <p>
      <label> Last Name *</label>
      <input v-model="user.lastName" placeholder="Your last name">
    </p>

    <p>
      <label> Street Address *</label>
      <input v-model="user.streetAddress" placeholder="">
    </p>

    <p>
      <label> City *</label>
      <input v-model="user.city" placeholder="">
    </p>

    <p>
      <label> State *</label>
      <select :disabled="user.states.length == 0" v-model="user.state">
        <option value="">Select a State</option>
        <option v-for="state in user.states" v-bind:value="state.name">{{state.abbreviation}}</option>
      </select>
    </p>

    <p>
      <label> Zip Code *</label>
      <input v-model="user.zipCode" placeholder="">
    </p>

    <p>
      <label> Family Size </label>
      <input v-model="user.familySize" placeholder="" type="number">
    </p>

    <p>
      <label> Date of arrival </label>
      <input v-model="user.doa" placeholder="">
    </p>

    <p>
      <label> Phone Number </label>
      <input v-model="user.phNumber" placeholder="">
    </p>

    <p>
      <label> Email Address *</label>
      <input v-model="user.email" placeholder="">
    </p>


    <p>
      <label> Status </label>

      <span>

      <input type="radio" id="one" value="One" v-model="user.status">
      <label for="one">US Citizen</label>
      
      <input type="radio" id="two" value="Two" v-model="user.status">
      <label for="two">Green Card</label>
      
      <input type="radio" id="three" value="Three" v-model="user.status">
      <label for="two">Student</label>
      
      <input type="radio" id="four" value="Four" v-model="user.status">
      <label for="two">Others</label>

      </span>
    </p>
    <br>
    <button> Submit </button>
    <button> Cancel </button>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        streetAddress: '',
        city: '',
        state: '',
        states: [
            { name: 'ALABAMA', abbreviation: 'AL'},
            { name: 'ALASKA', abbreviation: 'AK'},
            { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
            { name: 'ARIZONA', abbreviation: 'AZ'},
            { name: 'ARKANSAS', abbreviation: 'AR'},
            { name: 'CALIFORNIA', abbreviation: 'CA'},
            { name: 'COLORADO', abbreviation: 'CO'},
            { name: 'CONNECTICUT', abbreviation: 'CT'},
            { name: 'DELAWARE', abbreviation: 'DE'},
            { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
            { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
            { name: 'FLORIDA', abbreviation: 'FL'},
            { name: 'GEORGIA', abbreviation: 'GA'},
            { name: 'GUAM', abbreviation: 'GU'},
            { name: 'HAWAII', abbreviation: 'HI'},
            { name: 'IDAHO', abbreviation: 'ID'},
            { name: 'ILLINOIS', abbreviation: 'IL'},
            { name: 'INDIANA', abbreviation: 'IN'},
            { name: 'IOWA', abbreviation: 'IA'},
            { name: 'KANSAS', abbreviation: 'KS'},
            { name: 'KENTUCKY', abbreviation: 'KY'},
            { name: 'LOUISIANA', abbreviation: 'LA'},
            { name: 'MAINE', abbreviation: 'ME'},
            { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
            { name: 'MARYLAND', abbreviation: 'MD'},
            { name: 'MASSACHUSETTS', abbreviation: 'MA'},
            { name: 'MICHIGAN', abbreviation: 'MI'},
            { name: 'MINNESOTA', abbreviation: 'MN'},
            { name: 'MISSISSIPPI', abbreviation: 'MS'},
            { name: 'MISSOURI', abbreviation: 'MO'},
            { name: 'MONTANA', abbreviation: 'MT'},
            { name: 'NEBRASKA', abbreviation: 'NE'},
            { name: 'NEVADA', abbreviation: 'NV'},
            { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
            { name: 'NEW JERSEY', abbreviation: 'NJ'},
            { name: 'NEW MEXICO', abbreviation: 'NM'},
            { name: 'NEW YORK', abbreviation: 'NY'},
            { name: 'NORTH CAROLINA', abbreviation: 'NC'},
            { name: 'NORTH DAKOTA', abbreviation: 'ND'},
            { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
            { name: 'OHIO', abbreviation: 'OH'},
            { name: 'OKLAHOMA', abbreviation: 'OK'},
            { name: 'OREGON', abbreviation: 'OR'},
            { name: 'PALAU', abbreviation: 'PW'},
            { name: 'PENNSYLVANIA', abbreviation: 'PA'},
            { name: 'PUERTO RICO', abbreviation: 'PR'},
            { name: 'RHODE ISLAND', abbreviation: 'RI'},
            { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
            { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
            { name: 'TENNESSEE', abbreviation: 'TN'},
            { name: 'TEXAS', abbreviation: 'TX'},
            { name: 'UTAH', abbreviation: 'UT'},
            { name: 'VERMONT', abbreviation: 'VT'},
            { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
            { name: 'VIRGINIA', abbreviation: 'VA'},
            { name: 'WASHINGTON', abbreviation: 'WA'},
            { name: 'WEST VIRGINIA', abbreviation: 'WV'},
            { name: 'WISCONSIN', abbreviation: 'WI'},
            { name: 'WYOMING', abbreviation: 'WY' }
        ],
        zipCode: '',
        familySize: '',
        doa: '',
        phNumber: '',
        email: '',
        status: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.wrapper {
  border : 1px solid #cccccc;
}
p > label {
    /* margin-left: -10px; */
    padding-right: 21px;
    text-align: right;
    width: 134px;
    /* background: red; */
    display: inline-block;
}
select {
  width: 130px
}
</style>
