int speaker = 4;

void setup() {
  Serial.begin(9600);
  pinMode(speaker, OUTPUT);
}

void loop() {
  int input = analogRead(1);
  if(input < 100){
    tone(4, 1000, 500); 
  }

 Serial.println(input);
}
