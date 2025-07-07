Citizen.CreateThread(function ()
    while true do

        local voiceLevel = nil

        if LocalPlayer.state['proximity'] then
            voiceLevel = LocalPlayer.state['proximity'].distance
        end
    
        local ped = PlayerPedId()
        SendNUIMessage({
            action = 'updateHud',
            health = GetEntityHealth(PlayerPedId()) - 100,
            armor = GetPedArmour(ped),
            stamina = GetPlayerStamina(PlayerId()) or GetPlayerUnderwaterTimeRemaining(PlayerId()) * 10,
            voice = voiceLevel,
            talking = NetworkIsPlayerTalking(PlayerId()),
        })
        Wait(300)
    end
end)




local hided = false

RegisterCommand('hidehud', function()

    if hided == false then
        hided = true
    else
        hided = false
    end

    SendNUIMessage({
        action = "ScrollHide",
        toggle = hided
    })    
end, false)




RegisterKeyMapping('hidehud', 'wyl/wl hud', 'MOUSE_BUTTON', 'MOUSE_MIDDLE')