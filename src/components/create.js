import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    currency_balance: "",
    level: "",
    race: "",
    gender: "",
    backstory: "",
    weapon_name: "",
    weapon_type: "",
    weapon_damage: "",
    weapon_range: "",
    ability_name: "",
    ability_type: "",
    ability_damage: "",
    ability_range: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      name: "",
      currency_balance: "",
      level: "",
      race: "",
      gender: "",
      backstory: "",
      weapon_name: "",
      weapon_type: "",
      weapon_damage: "",
      weapon_range: "",
      ability_name: "",
      ability_type: "",
      ability_damage: "",
      ability_range: "",
    });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div className="container">
      <h3>Create New Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="currency_balance">Currency Balance</label>
          <input
            type="text"
            className="form-control"
            id="currency_balance"
            value={form.currency_balance}
            onChange={(e) => updateForm({ currency_balance: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="level">Level</label>
          <input
            type="text"
            className="form-control"
            id="level"
            value={form.level}
            onChange={(e) => updateForm({ level: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="race">Race</label>
          <input
            type="text"
            className="form-control"
            id="race"
            value={form.race}
            onChange={(e) => updateForm({ race: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            value={form.gender}
            onChange={(e) => updateForm({ gender: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="backstory">Backstory</label>
          <input
            type="text"
            className="form-control"
            id="backstory"
            value={form.backstory}
            onChange={(e) => updateForm({ backstory: e.target.value })}
          />
        </div>
        <label>Choose a Weapon</label>
        <div className="form-group mb-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="weaponOptions"
              id="weaponDagger"
              value="Dagger"
              checked={form.weapon_name === "Dagger"}
              onChange={(e) => updateForm({ weapon_name: e.target.value })}
            />
            <label htmlFor="weaponDagger" className="form-check-label">
              Dagger
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="weaponOptions"
              id="weaponLongsword"
              value="Longsword"
              checked={form.weapon_name === "Longsword"}
              onChange={(e) => updateForm({ weapon_name: e.target.value })}
            />
            <label htmlFor="weaponLongsword" className="form-check-label">
              Longsword
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="weaponOptions"
              id="weaponTrident"
              value="Trident"
              checked={form.weapon_name === "Trident"}
              onChange={(e) => updateForm({ weapon_name: e.target.value })}
            />
            <label htmlFor="weaponTrident" className="form-check-label">
              Trident
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="weaponOptions"
              id="weaponShortbow"
              value="Shortbow"
              checked={form.weapon_name === "Shortbow"}
              onChange={(e) => updateForm({ weapon_name: e.target.value })}
            />
            <label htmlFor="weaponShortbow" className="form-check-label">
              Shortbow
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="weaponOptions"
              id="weaponBlowgun"
              value="Blowgun"
              checked={form.weapon_name === "Blowgun"}
              onChange={(e) => updateForm({ weapon_name: e.target.value })}
            />
            <label htmlFor="weaponBlowgun" className="form-check-label">
              Blowgun
            </label>
          </div>
        </div>
        <label>Choose an Ability</label>
        <div className="form-group mb-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="abilityOptions"
              id="abilityFireball"
              value="Fireball"
              checked={form.ability_name === "Fireball"}
              onChange={(e) => updateForm({ ability_name: e.target.value })}
            />
            <label htmlFor="abilityFireball" className="form-check-label">
              Fireball
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="abilityOptions"
              id="abilityTsunami"
              value="Tsunami"
              checked={form.ability_name === "Tsunami"}
              onChange={(e) => updateForm({ ability_name: e.target.value })}
            />
            <label htmlFor="abilityTsunami" className="form-check-label">
              Tsunami
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="abilityOptions"
              id="abilityWallOfIce"
              value="Wall Of Ice"
              checked={form.ability_name === "Wall Of Ice"}
              onChange={(e) => updateForm({ ability_name: e.target.value })}
            />
            <label htmlFor="abilityWallOfIce" className="form-check-label">
              Wall of Ice
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="abilityOptions"
              id="abilityBless"
              value="Bless"
              checked={form.ability_name === "Bless"}
              onChange={(e) => updateForm({ ability_name: e.target.value })}
            />
            <label htmlFor="abilityBless" className="form-check-label">
              Bless
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="abilityOptions"
              id="abilityCureWounds"
              value="Cure Wounds"
              checked={form.ability_name === "Cure Wounds"}
              onChange={(e) => updateForm({ ability_name: e.target.value })}
            />
            <label htmlFor="abilityCureWounds" className="form-check-label">
              Cure Wounds
            </label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
