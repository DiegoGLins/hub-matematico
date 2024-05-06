import { Grid, Typography } from "@mui/material"
import levelEasy from "/levelEasy.png"
import levelMiddle from "/levelMiddle.png"
import levelHard from "/levelHard.png"
import maticGame from "/maticGame.png"
import "../App.css"
import { useState } from "react"
import { useAppDispatch } from "../store/hooks"
import { getOperationOne } from "../store/modules/operation.slice"
import { useNavigate } from "react-router-dom"
import { Colors } from "../components/utils/colors"

const ChoiceLevel = () => {
  const navigate = useNavigate()
  const [currentLevel, setCurrentLevel] = useState<string>("")
  const dispatch = useAppDispatch()

  function getLevel(level: string) {
    switch (level) {
      case "Fácil":
        dispatch(getOperationOne({ operationLevel: "+", gameLevel: "Fácil" }))
        break
      case "Médio":
        dispatch(getOperationOne({ operationLevel: "x", gameLevel: "Médio" }))
        break
      case "Difícil":
        dispatch(getOperationOne({ operationLevel: "÷", gameLevel: "Difícil" }))
        break
    }
    setCurrentLevel(level)
    navigate(`/home?level=${level}`)
  }

  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        marginTop: "60px",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "100px", marginBottom: "10px" }}
          src={maticGame}
          alt="calculadora"
        />
        <Typography
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "Fredoka, sans-serif",
            fontSize: "25.41px",
            fontWeight: 600,
            color: Colors.green,
          }}
        >
          Selecione seu nível de dificuldade
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => getLevel("Fácil")}
          className="buttonChoiceLevel"
          value={currentLevel}
        >
          Fácil <img src={levelEasy} alt="levelEasy" />
        </button>
        <button
          onClick={() => getLevel("Médio")}
          className="buttonChoiceLevel"
          value={currentLevel}
        >
          Médio <img src={levelMiddle} alt="levelMiddle" />
        </button>
        <button
          onClick={() => getLevel("Difícil")}
          className="buttonChoiceLevel"
          value={currentLevel}
        >
          Difícil <img src={levelHard} alt="levelHard" />
        </button>
      </Grid>
    </Grid>
  )
}

export default ChoiceLevel
