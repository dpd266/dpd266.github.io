/*

*/

int led = 7;
int button = 2;
int reading;

void setup() {
  pinMode(7,OUTPUT);
  pinMode(button,INPUT);
  digitalWrite(led, HIGH);
  Serial.begin (9600);
}

void loop() {
  reading = digitalRead(button);
  if (reading == 1){
    digitalWrite(led, HIGH);
    delay (1000);
    digitalWrite(led, LOW);
    delay (1000);
  }else{
    digitalWrite(led, LOW);
  }
  }
