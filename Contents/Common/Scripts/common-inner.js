function OnJoystickControlled(strPara){
	var btn_info = strPara.split(',')[4];


	if(btn_info[0] == '1'){
		
	}
	if(btn_info[1] == '1'){
		
	}
	if(btn_info[2] == '1'){
		
	}
	if(btn_info[3] == '1'){
		location.href = "../../maincontents.htm";
		
	}

	if(btn_info[4] == '1'){
		SetHeadYaw(-35, 23);       
	}
	if(btn_info[5] == '1'){
       SetHeadYaw(0,23);
	}
	if(btn_info[6] == '1'){
		SetHeadYaw(35, 23);
	}
	if(btn_info[7] == '1'){
		SetHeadYaw(0,23);
	}
	if(btn_info[8] == '1'){
		SetHeadYaw(35, 23);
	}
	if(btn_info[9] == '1'){
		SetHeadYaw(0,23);
	}
	if(btn_info[10] == '1'){
		SetHeadYaw(35, 23);
	}
	if(btn_info[11] == '1'){
		SetHeadYaw(0,23);
	}
}