package com.deviro.maven.services.impl;

import com.deviro.maven.services.RedPrinter;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class SpanishRedPrinter implements RedPrinter {
  @Override
  public String print() {
    return "rojo";
  }
}
