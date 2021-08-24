let blends = {
    "colombia": {
        "models": ["darkchocho", "jasmine", "passionfruit"],
        "answer": ["jasmine", "passionfruit"],
    },
    "alteco": {
        "models": ["cocoabeanok", "honey", "nuts", "passionfruit"],
        "answer": ["cocoabeanok", "honey", "nuts"]
    },
    "altecodecaf": {
        "models": ["honey", "milkchoko", "newhazelnuts", "nuts"],
        "answer": ["milkchoko", "newhazelnuts", "nuts"]
    },
    "brasile": {
        "models": ["honey", "jasmine", "milkchoko", "newhazelnuts"],
        "answer": ["honey", "milkchoko", "newhazelnuts"]
    },
    "brasileblend": {
        "models": ["cubesugar", "darkchocho", "jasmine", "newhazelnuts"],
        "answer": ["cubesugar", "darkchocho", "newhazelnuts"]
    },
    "brasileextraintenso": {
        "models": ["cocoabeanok", "passionfruit", "wheat"],
        "answer": ["cocoabeanok", "wheat"]
    },
    "india": {
        "models": ["cinnamonandpepper", "cocoabeanok", "jasmine"],
        "answer": ["cinnamonandpepper", "cocoabeanok"]
    },
    "selection": {
        "models": ["almonds", "cinnamonandpepper", "jasmine", "milkchoko"],
        "answer": ["almonds", "jasmine", "milkchoko"]
    }
}

let roast = {
    "colombia": {
        "model": 215,
        "position": [0, -0.1, -0.3],
        "scale": [0.005, 0.005, 0.005],
    },
    "alteco": {
        "model": 215,
        "position": [0, -0.1, -0.3],
        "scale": [0.005, 0.005, 0.005],
    },
    "altecodecaf": {
        "model": 215,
        "position": [0, -0.1, -0.3],
        "scale": [0.005, 0.005, 0.005],
    },
    "brasile": {
        "model": 215,
        "position": [0, -0.1, -0.3],
        "scale": [0.005, 0.005, 0.005],
    },
    "brasileblend": {
        "model": 235,
        "position": [0, -0.1, -0.3],
        "scale": [0.005, 0.005, 0.005],
    },
    "brasileextraintenso": {
        "model": 235,
        "position": [0, -0.1, -0.3],
        "scale": [0.005, 0.005, 0.005],
    },
    "india": {
        "model": 215,
        "position": [0, -0.1, -0.3],
        "scale": [0.005, 0.005, 0.005],
    },
    "selection": {
        "model": 215,
        "position": [0, -0.1, -0.3],
        "scale": [0.005, 0.005, 0.005],
    }
}


let organoleptic = {
    "colombia": {
        "model": "colombia",
        "position": [0, -0.04, -0.2],
        "scale": [0.004, 0.004, 0.004],
    },
    "alteco": {
        "model": "alteco",
        "position": [0, -0.04, -0.2],
        "scale": [0.004, 0.004, 0.004],
    },
    "altecodecaf": {
        "model": "altecodecaf",
        "position": [0, -0.04, -0.2],
        "scale": [0.004, 0.004, 0.004],
    },
    "brasile": {
        "model": "brasile",
        "position": [0, -0.04, -0.2],
        "scale": [0.005, 0.005, 0.005],
    },
    "brasileblend": {
        "model": "brasileblend",
        "position": [0, -0.04, -0.2],
        "scale": [0.005, 0.005, 0.005],
    },
    "brasileextraintenso": {
        "model": "brasileextraintenso",
        "position": [0, -0.04, -0.2],
        "scale": [0.005, 0.005, 0.005],
    },
    "india": {
        "model": "india",
        "position": [0, -0.04, -0.2],
        "scale": [0.005, 0.005, 0.005],
    },
    "selection": {
        "model": "selection",
        "position": [0, -0.04, -0.2],
        "scale": [0.005, 0.005, 0.005],
    }
}


let ans_model_prop =
{
    "alteco": {
        "correct_model": "altecocorrecttext",
        "correct_position": [0, -0.06, -0.2],
        "correct_scale": [0.08, 0.08, 0.08],
        "wrong_model": "altecowrongtext",
        "wrong_position": [0, -0.06, -0.2],
        "wrong_scale": [0.08, 0.08, 0.08],
        "model": "alteco",
        "position": [0, -0.10, -0.24],
        "scale": [0.05, 0.05, 0.05],
    },
    "colombia": {
        "correct_model": "Colombia_Correct",
        "correct_position": [0, -0.06, -0.2],
        "correct_scale": [0.08, 0.08, 0.08],
        "wrong_model": "Colombia_WrongAnswer",
        "wrong_position": [0, -0.06, -0.2],
        "wrong_scale": [0.08, 0.08, 0.08],
        "model": "colombia",
        "position": [0, -0.10, -0.24],
        "scale": [0.08, 0.08, 0.08],
    },
    "altecodecaf": {
        "correct_model": "AltecoDeca_Correct",
        "correct_position": [0, -0.06, -0.2],
        "correct_scale": [0.08, 0.08, 0.08],
        "wrong_model": "AltecoDeca_WrongAnswer",
        "wrong_position": [0, -0.06, -0.2],
        "wrong_scale": [0.08, 0.08, 0.08],
        "model": "altecoDeca",
        "position": [0, -0.10, -0.24],
        "scale": [0.08, 0.08, 0.08],
    },
    "brasile": {
        "correct_model": "Brasile_100__Correct",
        "correct_position": [0, -0.06, -0.2],
        "correct_scale": [0.08, 0.08, 0.08],
        "wrong_model": "Brasile_100__WrongAnswer",
        "wrong_position": [0, -0.06, -0.2],
        "wrong_scale": [0.08, 0.08, 0.08],
        "model": "brasile100_",
        "position": [0, -0.10, -0.24],
        "scale": [0.08, 0.08, 0.08],
    },
    "brasileblend": {
        "correct_model": "brasileblendcorrecttext",
        "correct_position": [0, -0.06, -0.2],
        "correct_scale": [0.08, 0.08, 0.08],
        "wrong_model": "brasileblendwrongtext",
        "wrong_position": [0, -0.06, -0.2],
        "wrong_scale": [0.08, 0.08, 0.08],
        "model": "brasile_blend",
        "position": [0, -0.10, -0.24],
        "scale": [0.08, 0.08, 0.08],
    },
    "brasileextraintenso": {
        "correct_model": "BrasileExtraIntenso_Correct",
        "correct_position": [0, -0.06, -0.2],
        "correct_scale": [0.08, 0.08, 0.08],
        "wrong_model": "BrasileExtra_WrongAnswer",
        "wrong_position": [0, -0.06, -0.2],
        "wrong_scale": [0.08, 0.08, 0.08],
        "model": "brasile_extra",
        "position": [0, -0.10, -0.24],
        "scale": [0.08, 0.08, 0.08],
    },
    "india": {
        "correct_model": "India_Correct",
        "correct_position": [0, -0.06, -0.2],
        "correct_scale": [0.08, 0.08, 0.08],
        "wrong_model": "India_WrongAnswer",
        "wrong_position": [0, -0.06, -0.2],
        "wrong_scale": [0.08, 0.08, 0.08],
        "model": "india",
        "position": [0, -0.10, -0.24],
        "scale": [0.08, 0.08, 0.08],
    },
    "selection": {
        "correct_model": "Selection_Correct",
        "correct_position": [0, -0.06, -0.2],
        "correct_scale": [0.08, 0.08, 0.08],
        "wrong_model": "Selection_WrongAnswer",
        "wrong_position": [0, -0.06, -0.2],
        "wrong_scale": [0.08, 0.08, 0.08],
        "model": "selection",
        "position": [0, -0.10, -0.24],
        "scale": [0.08, 0.08, 0.08],
    }
}


let model_prop =
{
    // colombia blend
    "colombia_darkchocho": {
        "position": [0, -0.05, -0.2],
        "circle_position": [0, 0, -0.2],
        "scale": [0.08, 0.08, 0.08],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "colombia_jasmine": {
        "position": [-0.07, -0.05, -0.3],
        "circle_position": [-0.07, 0, -0.3],
        "scale": [0.08, 0.08, 0.08],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "colombia_passionfruit": {
        "position": [0.07, -0.05, -0.3],
        "circle_position": [0.07, 0, -0.3],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },

    // alteco blend

    "alteco_cocoabeanok": {
        "position": [0, -0.05, -0.5],
        "circle_position": [0, 0.02, -0.5],
        "scale": [0.15, 0.15, 0.15],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "alteco_honey": {
        "position": [-0.09, -0.05, -0.35],
        "circle_position": [-0.09, 0, -0.35],
        "scale": [0.08, 0.08, 0.08],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "alteco_nuts": {
        "position": [0.09, -0.05, -0.35],
        "circle_position": [0.09, 0, -0.35],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "alteco_passionfruit": {
        "position": [0, -0.05, -0.2],
        "circle_position": [0, 0, -0.2],
        "scale": [0.08, 0.08, 0.08],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    // altecodecaf blend

    "altecodecaf_honey": {
        "position": [-0.09, -0.05, -0.35],
        "circle_position": [-0.09, 0, -0.35],
        "scale": [0.08, 0.08, 0.08],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "altecodecaf_milkchoko": {
        "position": [0, -0.05, -0.2],
        "circle_position": [0, 0, -0.2],
        "scale": [0.08, 0.08, 0.08],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "altecodecaf_newhazelnuts": {
        "position": [0, -0.05, -0.5],
        "circle_position": [0, 0.02, -0.5],
        "scale": [0.2, 0.2, 0.2],
        "circle_scale": [0.06, 0.06, 0.06],
    },
    "altecodecaf_nuts": {
        "position": [0.09, -0.05, -0.35],
        "circle_position": [0.09, 0, -0.35],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },

    // brasile

    "brasile_honey": {
        "position": [0.09, -0.05, -0.35],
        "circle_position": [-0.09, 0, -0.35],
        "scale": [0.08, 0.08, 0.08],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "brasile_jasmine": {
        "position": [-0.09, -0.05, -0.35],
        "circle_position": [0.09, 0, -0.35],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "brasile_milkchoko": {
        "position": [0, -0.05, -0.2],
        "circle_position": [0, 0, -0.2],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "brasile_newhazelnuts": {
        "position": [0, -0.05, -0.5],
        "circle_position": [0, 0.02, -0.5],
        "scale": [0.2, 0.2, 0.2],
        "circle_scale": [0.06, 0.06, 0.06],
    },

    // brasileblend

    "brasileblend_cubesugar": {
        "position": [0.09, -0.05, -0.35],
        "circle_position": [0.09, 0, -0.35],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "brasileblend_darkchocho": {
        "position": [0, -0.05, -0.2],
        "circle_position": [0, 0, -0.2],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "brasileblend_jasmine": {
        "position": [-0.09, -0.05, -0.35],
        "circle_position": [-0.09, 0, -0.35],
        "scale": [0.13, 0.13, 0.13],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "brasileblend_newhazelnuts": {
        "position": [0, -0.05, -0.5],
        "circle_position": [0, 0.02, -0.5],
        "scale": [0.2, 0.2, 0.2],
        "circle_scale": [0.06, 0.06, 0.06],
    },
    // brasileextraintenso

    "brasileextraintenso_cocoabeanok": {
        "position": [0, -0.05, -0.2],
        "circle_position": [0, 0, -0.2],
        "scale": [0.15, 0.15, 0.15],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "brasileextraintenso_passionfruit": {
        "position": [-0.07, -0.05, -0.3],
        "circle_position": [-0.07, 0, -0.3],
        "scale": [0.12, 0.12, 0.12],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "brasileextraintenso_wheat": {
        "position": [0.07, -0.05, -0.3],
        "circle_position": [0.07, 0, -0.3],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },

    // india
    "india_jasmine": {
        "position": [-0.07, -0.05, -0.3],
        "circle_position": [-0.07, 0, -0.3],
        "scale": [0.08, 0.08, 0.08],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "india_cinnamonandpepper": {
        "position": [0.07, -0.05, -0.3],
        "circle_position": [0.07, 0, -0.3],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "india_cocoabeanok": {
        "position": [0, -0.05, -0.2],
        "circle_position": [0, 0, -0.2],
        "scale": [0.15, 0.15, 0.15],
        "circle_scale": [0.04, 0.04, 0.04],
    },


    // selection

    "selection_almonds": {
        "position": [0, -0.05, -0.2],
        "circle_position": [0, 0, -0.2],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "selection_cinnamonandpepper": {
        "position": [0.09, -0.05, -0.35],
        "circle_position": [0.09, 0, -0.35],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "selection_jasmine": {
        "position": [-0.09, -0.05, -0.35],
        "circle_position": [-0.09, 0, -0.35],
        "scale": [0.13, 0.13, 0.13],
        "circle_scale": [0.04, 0.04, 0.04],
    },
    "selection_milkchoko": {
        "position": [0, -0.05, -0.5],
        "circle_position": [0, 0, -0.5],
        "scale": [0.1, 0.1, 0.1],
        "circle_scale": [0.04, 0.04, 0.04],
    },
}